"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Solana brand colors
  const solanaColors = {
    purple: "#9945FF",
    green: "#14F195",
    teal: "#00C2FF",
    blue: "#0047AB",
    gradient: "linear-gradient(to right, #9945FF, #14F195)",
  };

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/report.pdf"; // Path to your PDF report
      link.download = "SuperteamNG_DevGrowth_Q1_2025.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadComplete(true);

      // Reset success state after 3 seconds
      setTimeout(() => {
        setDownloadComplete(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="container">
      <Head>
        <title>SuperteamNG SW Developer Growth Report – Q1 2025</title>
        <meta
          name="description"
          content="Download the Superteam NG Developer Growth Report – Q1 2025, showcasing the vibrant developer ecosystem in Southwest Nigeria."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Superteam NG Developer Growth Report</h1>
        <p className="subtitle">Q1 2025 – Building Tomorrow, Today</p>

        <div className="download-container">
          <button
            className={`download-button ${isDownloading ? "downloading" : ""} ${
              downloadComplete ? "complete" : ""
            }`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <div className="loader">
                <div className="loader-circle"></div>
              </div>
            ) : downloadComplete ? (
              <span className="check-mark">✓</span>
            ) : (
              "Download Report PDF"
            )}
          </button>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #121212;
          color: white;
        }
        main {
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .title {
          margin: 0;
          font-size: 3.5rem;
          background: ${solanaColors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }
        .subtitle {
          margin: 1rem 0 3rem;
          font-size: 1.5rem;
          color: #cccccc;
        }
        .download-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .download-button {
          position: relative;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          background: ${solanaColors.purple};
          color: white;
          transition: all 0.3s ease;
          min-width: 220px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(153, 69, 255, 0.3);
        }
        .download-button:hover {
          background: ${solanaColors.teal};
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(153, 69, 255, 0.4);
        }
        .download-button:active {
          transform: translateY(-1px);
        }
        .download-button.downloading {
          background: ${solanaColors.blue};
          cursor: not-allowed;
        }
        .download-button.complete {
          background: ${solanaColors.green};
        }
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loader-circle {
          width: 25px;
          height: 25px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .check-mark {
          font-size: 1.5rem;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
