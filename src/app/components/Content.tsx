import { Cart } from "./Cart"
import { Description } from "./Description"

export const Content = () => {
  return (
    <div className="mt-12 mb-12">
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row">
        <section>
          <Cart />
        </section>
        <section className="xl:ml-5 lg:ml-5 md:ml-5 mt-5 xl:mt-0 lg:mt-0 md:mt-0">
          <Description />
        </section>
      </div>
    </div>
  )
}