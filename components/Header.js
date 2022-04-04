export default function Header({ children }) {
  return (
    <h1 className="text-4xl font-medium md:text-5xl xl:text-6xl">{children}</h1>
  )
}

export const PageHeader = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-20 text-center text-[#1d1d1f] md:pt-24 lg:gap-10">
      <Header text="Frequently Asked Questions">{children}</Header>
      <span className="block h-[0.2rem] w-10 rounded-full bg-red-400 xl:w-16" />
    </div>
  )
}

export const SectionHeader = ({ children }) => (
  <h1 className="pb-5 text-3xl font-medium text-[#1d1d1f] md:text-4xl xl:text-5xl">
    {children}
  </h1>
)
