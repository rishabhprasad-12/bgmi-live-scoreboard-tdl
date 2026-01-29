export default function LiveBadge() {
  return (
    <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md animate-pulse">
      <span className="w-2 h-2 bg-white rounded-full"></span>
      LIVE
    </div>
  );
}
