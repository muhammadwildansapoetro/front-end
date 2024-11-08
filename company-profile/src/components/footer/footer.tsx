import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-700 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-start text-white">
          <div className="mx-5 border">
            <span className="font-bold">FarmLink Indonesia</span> <br /> Founded
            in 2021 | Based in Indramayu, Indonesia <br />
            Founder & CEO: Teguh Laksono
          </div>

          <div className="mx-5 border">
            <div></div>
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
                  Products & Services
                </Link>
              </li>
              <li>Sustainability</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="mx-5 border">
            <ul>
              <li>
                <span className="font-bold">Email:</span>{" "}
                customerservice@farmlinkindonesia.com{" "}
              </li>
              <li>
                <span className="font-bold">Phone:</span> +62 812 3456 7890
              </li>
              <li>
                <span className="font-bold">Address:</span> Jl. Raya Pertanian
                No. 1, Indramayu, Jawa Barat, Indonesia
              </li>
            </ul>
          </div>

          <div className="mx-5 border">
            <div className="font-semibold mb-2">Connect with us</div>
            <div>
              <FaInstagram size={25} />
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
