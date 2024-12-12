import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      console.log("Form data received:", { name, email, message });
  
      res.status(200).json({ message: "Form submitted successfully" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }