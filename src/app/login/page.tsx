"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import BrandLogo from "./components/BrandLogo";

type Stage = "mobile" | "otp";

export default function LoginPage() {
  const [stage, setStage] = useState<Stage>("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  function sendOtp(e: FormEvent) {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setMessage("");
    setStage("otp");
  }

  function verifyOtp(e: FormEvent) {
    e.preventDefault();
    if (otp !== "123456") {
      setMessage("For this demo, use OTP 123456.");
      return;
    }
    sessionStorage.setItem("sf_logged_in", "true");
    sessionStorage.setItem("sf_mobile", mobile);
    window.location.href = "/profile";
  }

  return (
    <main className="loginPage">
      <div className="loginImage">
        <div className="loginImageOverlay" />
        <Link href="/" className="loginBrand">
          <BrandLogo />
        </Link>
        <div className="loginImageCopy">
          <p className="eyebrow">YOUR FARM JOURNEY</p>
          <h1>Fresh from our land.<br />Connected to your family.</h1>
          <p>Manage your adopted Red Diamond Guava tree, farm updates and harvest deliveries in one place.</p>
        </div>
      </div>

      <section className="loginPanel">
        <Link href="/" className="mobileBack">← Home</Link>
        <div className="loginBox">
          <p className="sectionEyebrow">{stage === "mobile" ? "CUSTOMER LOGIN" : "VERIFY YOUR NUMBER"}</p>

          {stage === "mobile" ? (
            <>
              <h2>Welcome back</h2>
              <p className="loginIntro">Login once to continue with your tree adoption.</p>
              <form onSubmit={sendOtp}>
                <label htmlFor="mobile">Mobile number</label>
                <div className="phoneInput">
                  <span>+91</span>
                  <input id="mobile" inputMode="numeric" maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter 10-digit number" />
                </div>
                {message && <p className="formMessage">{message}</p>}
                <button className="loginSubmit" type="submit">Send OTP <span>→</span></button>
              </form>
              <p className="loginNote">🔒 You will stay logged in while completing your adoption.</p>
            </>
          ) : (
            <>
              <button className="backButton" onClick={() => { setStage("mobile"); setMessage(""); }}>
                ← Change number
              </button>
              <h2>Verify your number</h2>
              <p className="loginIntro">We sent a 6-digit OTP to <strong>+91 {mobile}</strong>.</p>
              <form onSubmit={verifyOtp}>
                <label htmlFor="otp">Enter OTP</label>
                <input className="otpInput" id="otp" inputMode="numeric" maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="••••••" />
                {message && <p className="formMessage">{message}</p>}
                <button className="loginSubmit" type="submit">Verify & Continue <span>→</span></button>
              </form>
              <p className="demoOtp">Demo OTP: <strong>123456</strong></p>
            </>
          )}
        </div>
        <p className="loginFooter">New to Sulochana Farms? <Link href="/adopt">Adopt a Tree</Link></p>
      </section>
    </main>
  );
}