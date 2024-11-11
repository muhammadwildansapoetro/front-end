import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-700 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-start text-white">
          <div className="mx-5 ">
            <span className="font-bold">FarmLink Indonesia</span> <br />
            Cultivating a Sustainable Future <br />
            Founded in 2021
            <br />
            Based in Indramayu, Indonesia <br />
          </div>

          <div className="mx-5 ">
            <ul>
              <li>
                <Link href={"/"} className="hover:text-color4">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:text-color4">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="hover:text-color4">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href={"https://wa.me/6285719960008"}
                  className="hover:text-color4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mx-5 ">
            <ul>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                customerservice@farmlinkindonesia.com{" "}
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +62 857-1996-0008
              </li>
              <li>
                <span className="font-semibold">Address:</span> Jl. Raya
                Pertanian No. 1, Indramayu, Jawa Barat, Indonesia
              </li>
            </ul>
          </div>

          <div className="mx-5 ">
            <div className="font-semibold mb-2">Connect with us</div>
            <div className="flex gap-3">
              <Link href={"https://wa.me/6285719960008"} target="_blank">
                <FaWhatsapp size={25} className="lg:hover:text-green-500" />
              </Link>
              <FaFacebook size={25} className="hover:text-blue-500" />
              <FaInstagram size={25} className="hover:text-purple-500" />
              <FaLinkedin size={25} className="hover:text-blue-500" />
            </div>
          </div>
        </div>

        <div className="mx-5 text-center text-white mt-20">
          Copyright © 2024 FarmLink Indonesia. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
