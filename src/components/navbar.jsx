import * as React from "react";

function Navbar() {
  return (
    <div className="flex items-center">
      <a className='mx-5 text-tertiary text-2xl' href="/work">Work</a>
      <a className='mx-5 text-tertiary text-2xl' href="/skills">Skills</a>
      <a className='mx-5 text-tertiary text-2xl' href="/about">About</a>
    </div>
  );
}

export { Navbar };
