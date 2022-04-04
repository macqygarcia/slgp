export default function Resource() {
  return (
    <div className="relative h-72 w-full animate-pulse rounded-lg bg-zinc-200">
      <div className="absolute top-5 right-5 flex items-center gap-2">
        <div className="h-7 w-7 rounded bg-zinc-600" />
        <div className="h-7 w-7 rounded bg-zinc-500" />
      </div>
      <div className="absolute bottom-5 left-5 w-full space-y-2">
        <div className="h-7 w-7 rounded-full bg-zinc-500" />
        <div className="h-2 w-24 rounded-full bg-zinc-500" />
        <div className="h-2 w-3/4 rounded-full bg-zinc-400" />
        <div className="h-2 w-2/4 rounded-full bg-zinc-400/95" />
        <div className="h-2 w-2/5 rounded-full bg-zinc-400/90" />
      </div>
      <div className="absolute bottom-5 right-5 h-7 w-7 rounded bg-zinc-400" />
    </div>
  )
}
