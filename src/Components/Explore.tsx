import { use, useState } from "react";
import type { Typeofdummy } from "../Type";
import { toast } from "react-toastify";
import { CiStar } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

interface ArrayType {
  name: string;
  Id: string;
  icon: string;
  category: string;
}

export default function Explore({ Dummydata }: { Dummydata: Promise<Typeofdummy[]> }) {
  const GetDummy = use(Dummydata);
  const [Stack, setStack] = useState<ArrayType[]>([]);

  const OnHandleAddtoStack = (name: string, Id: string, icon: string, category: string) => {
    toast.success("Technology Added To Stack");
    setStack((stack) => [...stack, { Id, name, icon, category }]);
  };

  const OnhandleDelete = (Id: string) => {
    setStack((Stack) => Stack.filter((item) => item.Id !== Id));
  };

  const OnhandleClearAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto px-4 py-8">

      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h2>
        <p className="text-[#64748B] text-base text-center md:text-left mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </header>


      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 items-start">


        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GetDummy.map((dummy) => {
            const isSelected = Stack.some((item) => item.Id === dummy.id);

            return (
              <div
                key={dummy.id}
                className="flex flex-col justify-between border border-[#E5E7EB] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <img src={dummy.icon} alt={dummy.name} className="w-10 h-10 object-contain rounded-lg" />
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#E0F2FE] text-[#0EA5E9]">
                      {dummy.badge}
                    </span>
                  </div>

                  <div className="my-6 pb-4 border-b border-[#F1F5F9]">
                    <h3 className="font-bold text-xl text-[#0F172A]">{dummy.name}</h3>
                    <p className="text-sm text-[#64748B] mt-2 line-clamp-3">{dummy.description}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-6">
                    <span className="bg-[#F1F5F9] text-[#475569] font-medium px-3 py-1 rounded-lg">
                      {dummy.category}
                    </span>
                    <span className="font-medium text-[#64748B]">{dummy.difficulty}</span>
                    <span className="font-semibold flex items-center gap-1 text-[#0F172A]">
                      <CiStar className="text-amber-500 text-base" />
                      {dummy.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => OnHandleAddtoStack(dummy.name, dummy.id, dummy.icon, dummy.category)}
                    disabled={isSelected}
                    className={`w-full py-2.5 px-4 font-semibold text-sm rounded-xl transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-emerald-100 text-emerald-700 cursor-not-allowed"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    {isSelected ? "Added to Stack" : "Add To Stack"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        <aside className="border border-[#E5E7EB] bg-white p-6 rounded-2xl sticky top-30 shadow-sm flex flex-col max-h-[calc(100vh-3rem)]">
          <div className="border-b border-[#F1F5F9] pb-4 mb-4">
            <h3 className="text-[#0F172A] text-2xl font-bold">Your Stack</h3>
            <p className="text-sm text-[#64748B] mt-1">
              {Stack.length} {Stack.length === 1 ? "Technology" : "Technologies"} Selected
            </p>
          </div>

          <div className="flex-1 pr-1">
            {Stack.length === 0 ? (
              <div className="text-center py-12 text-[#94A3B8] text-sm">
                No technologies added yet.
              </div>
            ) : (
              Stack.map((stacks) => (
                <div
                  key={stacks.Id}
                  className="flex items-center justify-between border border-[#E2E8F0] p-3 rounded-xl bg-slate-50/50"
                >
                  <div className="flex items-center gap-3">
                    <img src={stacks.icon} className="w-8 h-8 object-contain" alt={stacks.name} />
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{stacks.name}</p>
                      <p className="text-xs text-[#64748B]">{stacks.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => OnhandleDelete(stacks.Id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${stacks.name}`}
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>
              ))
            )}
          </div>

          {Stack.length > 0 && (
            <div className="pt-4 border-t border-[#F1F5F9] mt-4">
              <button
                onClick={OnhandleClearAll}
                className="w-full py-2.5 border border-[#ED8C85] font-semibold text-sm rounded-xl text-[#D82C20] hover:bg-red-50 transition-colors cursor-pointer"
              >
                Remove All
              </button>
            </div>
          )}
        </aside>

      </div>
    </section>
  );
}
