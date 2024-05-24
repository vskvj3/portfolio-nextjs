
import { RiNextjsLine } from "react-icons/ri";

export default function Skills(params) {
  return (
    <section className="bg-black w-1/2 mt-5 min-w-[350px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
      <div className=" text-center text-lg mb-5 font-bold">[My Tools]</div>
      <hr className="border-white mb-5" />
      <div>
        <div className=" text-center mb-3">[Web development]</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 mb-5 text-center gap-3">
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            React <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Next.js <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            HTML <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            CSS <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Tailwind CSS <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Node.js <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Express.js <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            MongoDB <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            MySQL <RiNextjsLine />{" "}
          </div>
        </div>
        <div className=" text-center mb-3">[Others]</div>
        <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-3">
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Flutter <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Git <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Linux <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Java <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            Python <RiNextjsLine />{" "}
          </div>
          <div className="flex items-center justify-center bg-slate-600 rounded-md">
            C/C++ <RiNextjsLine />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
