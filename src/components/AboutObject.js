function AboutObject() {
  return (
    <span className="bg-gray-900 hover:bg-gray-700 text-customwhite font-mono min-w-max text-supersmall items-center justify-center verytiny:text-xxxs tiny:text-xxs sm:text-xs md:text-sm rounded-xl p-2 md:p-4 md:mr-16 xl:mr-24 mt-4 md:mt-4 xl:mt-12 xl:text-base mb-3 md:mb-6 xl:mb-4">
      <div>
        <span className="text-gray-600">1</span>&nbsp;&nbsp;&#123;
      </div>
      <div>
        <span className="text-gray-600">2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-customyellow">“name”</span>: “Dan Blustein”,
      </div>
      <div>
        <span className="text-gray-600">3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-customyellow">“developing”</span>: “quick_chess",
      </div>
      <div>
        <span className="text-gray-600">4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-customyellow">“watching”</span>: ["The Wire", "NBA games"],
      </div>
      <div>
        <span className="text-gray-600">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-customyellow">“status”</span>: “job searching 🔍”
      </div>
      <div>
        <span className="text-gray-600">6</span>&nbsp;&nbsp;&#125;
      </div>
    </span>
  );
}

export default AboutObject;
