export const Section = ({ children }) => (
  <section className="rounded bg-[#f2f2f2] p-10">{children}</section>
)

export const WidthSection = ({ children }) => (
  <section className="p-5 sm:mx-auto sm:max-w-md md:max-w-xl xl:max-w-3xl">
    {children}
  </section>
)
