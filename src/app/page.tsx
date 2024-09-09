"use client";
import { useState } from "react";

export default function Home() {
  const curYear = new Date().getFullYear().toString();
  const [startYear, setStartYear] = useState(curYear);
  const [startMonthDay, setStartMonthDay] = useState("0000");
  const [startHourMinute, setStartHourMinute] = useState("0000");
  const [endYear, setEndYear] = useState(curYear);
  const [endMonthDay, setEndMonthDay] = useState("0000");
  const [endHourMinute, setEndHourMinute] = useState("0000");
  const [result, setResult] = useState<string | number>("시간을 입력해주세요.");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startDate = new Date(
      `${startYear}-${startMonthDay.slice(0, 2)}-${startMonthDay.slice(
        -2
      )}T${startHourMinute.slice(0, 2)}:${startHourMinute.slice(-2)}`
    );
    const endDate = new Date(
      `${endYear}-${endMonthDay.slice(0, 2)}-${endMonthDay.slice(
        -2
      )}T${endHourMinute.slice(0, 2)}:${endHourMinute.slice(-2)}`
    );
    const differenceInMinutes =
      (Number(endDate) - Number(startDate)) / (1000 * 60);
    if (differenceInMinutes > 0) {
      setResult(differenceInMinutes);
    } else {
      setResult("시간을 다시 확인해 주세요.");
    }
    console.log(startDate, endDate);
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[70%] flex flex-col justify-between items-center">
          <h1 className="text-center text-4xl font-extrabold mb-4">
            주차 시간 계산기
          </h1>
          <h5 className="text-sm text-gray-500  mb-4">
            *Tab 키로 입력 칸을 이동하고 엔터 키로 계산하면 빠릅니다.
          </h5>
          <form onSubmit={handleSubmit} className="w-full mb-5">
            <h2 className="text-lg text-blue-500 mb-5">입차</h2>
            <div className="flex justify-between mb-5">
              <div className="flex flex-col">
                <label htmlFor="startYear" className="font-extrabold">
                  연도
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="startYear"
                  defaultValue={startYear}
                  maxLength={4}
                  required
                  onChange={(e) => setStartYear(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startMonthDay" className="font-extrabold">
                  월일
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="startMonthDay"
                  placeholder="0101"
                  maxLength={4}
                  required
                  onChange={(e) => setStartMonthDay(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startHourMinute" className="font-extrabold">
                  시분
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="startHourMinute"
                  placeholder="0101"
                  maxLength={4}
                  required
                  onChange={(e) => setStartHourMinute(e.target.value)}
                />
              </div>
            </div>
            <h2 className="text-lg text-red-500 mb-5">출차</h2>
            <div className="flex justify-between mb-5">
              <div className="flex flex-col">
                <label htmlFor="endYear" className="font-extrabold">
                  연도
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="endYear"
                  maxLength={4}
                  defaultValue={curYear}
                  required
                  onChange={(e) => setEndYear(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endMonthDay" className="font-extrabold">
                  월일
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="endMonthDay"
                  placeholder="0101"
                  maxLength={4}
                  required
                  onChange={(e) => setEndMonthDay(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="endHourMinute" className="font-extrabold">
                  시분
                </label>
                <input
                  type="text"
                  className="w-20"
                  name=""
                  id="endHourMinute"
                  placeholder="0101"
                  maxLength={4}
                  required
                  content="text-center"
                  onChange={(e) => setEndHourMinute(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              계산
            </button>
          </form>
          <p
            className={`${
              typeof result === "number" ? "text-3xl" : "text-lg text-red-600"
            }`}
          >
            {typeof result === "number" ? `${result}분` : result}
          </p>
        </div>
      </div>
    </>
  );
}
