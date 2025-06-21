import "./globals.css";
import {Quicksand} from "next/font/google"

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})



export const metadata = {
  title: "Dashdeal – Where Every Click Saves You More!",
  description: `DashDeal is your one-stop e-commerce destination for the best online shopping deals on electronics, fashion, home essentials, beauty, gadgets, and more. Discover exclusive discounts, limited-time offers, and top-rated products delivered right to your doorstep. Whether you’re shopping for the latest tech or trendy wear, DashDeal brings you fast, secure, and affordable shopping in just a few clicks.
Shop smarter and save more every day with DashDeal – Where Deals Meet Speed.`,

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={quicksand.className}
        cz-shortcut-listen="true"
        >
        {children}
      </body>
    </html>
  );
}
