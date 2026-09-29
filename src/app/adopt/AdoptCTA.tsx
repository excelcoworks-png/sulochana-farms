"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdoptCTA() {
  const [href, setHref] = useState("/login");
  useEffect(() => {
    if (sessionStorage.getItem("sf_logged_in") === "true") setHref("/profile");
  }, []);
  return <Link href={href} className="primaryButton fullButton">Continue with Mobile Number <span>→</span></Link>;
}