import React from "react"

const page = () => {
  return (
    <div>
      <figure className="md:flex bg-yellow-107 rounded-x5 p-20 md:p-300 dark:bg-slate-1000">
        <img className="w-80 h-60 md:w-60 md:rounded-none rounded-full mx-auto" src="/next.jpeg" alt="" width="100" height="512" />
        <div className="pt-6 md:p-40 text-center md:text-left space-y-2">
          <blockquote>
            <p className="text-lg font-large">
              <b>AOA</b> <section>My name is <b><i>Muhammad Hassan Saeed</i></b>  I am learned <b>Generative AI</b> course under <b>Sir Asif Langrah</b></section>
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
             Muhammad Hassan Saeed
            </div>
            <div className="text-slate-1000 dark:text-slate-600">
              Artificial Intelligence, (Student)
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default page