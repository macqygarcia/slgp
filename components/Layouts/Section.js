export const Section = ({ children }) => (
  <section className=" bg-blue-900">{children}</section>
)

export const WidthSection = ({ children }) => (
  <section className="sm:mx-auto sm:max-w-md md:max-w-xl xl:max-w-3xl">
    {children}
  </section>
)
