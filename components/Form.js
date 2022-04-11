export default function Form() {
  return (
    <form className="flex h-full flex-col gap-5 bg-white p-5 lg:mx-auto lg:max-w-xl lg:p-10">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-600 focus:ring-blue-500 "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <div className="mb-4 flex items-center">
        <input
          id="checkbox-1"
          aria-describedby="checkbox-1"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor="checkbox-1"
          className="ml-3 text-sm font-medium text-gray-900"
        >
          I agree to the{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
      >
        Submit
      </button>
    </form>
  )
}
