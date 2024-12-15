import React from 'react'
import { ListItemSuffix, Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="flex w-full bg-slate-700 flex-col  items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center ">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
       
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            CPrivacy Policy
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Terms & Conditions
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Terms & Conditions
          </Typography>
        </li>
      </ul>

      <span className='text-gray-50'>@Arpan~Halder All Rights Reserved</span>
    </footer>
  )
}
