const DashboardHeader = () => {
  return (
    <div className="flex lg:flex-row justify-between mb-8 gap-4 items-center">
      <div className="flex lg:flex-col gap-2">
        <h1 className="text-3xl font-bold">Website Redesign Sprint</h1>
        <p className="text-slate-400">Sprint 12 • 24 June - 10 July</p>
      </div>
      <div class="flex -space-x-3">
        <div class="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-950"></div>
        <div class="w-10 h-10 rounded-full bg-green-500 border-2 border-slate-950"></div>
        <div class="w-10 h-10 rounded-full bg-yellow-500 border-2 border-slate-950"></div>
        <div class="w-10 h-10 rounded-full bg-pink-500 border-2 border-slate-950"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;
