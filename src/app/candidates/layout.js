export const metadata = {
  title: "Candidate dashboard",
  description: "Manage candidates data",
};

export default function CandidateListLayout({ children }) {
  return (
    <html lang="en">
      <body>
            {children}
      </body>
    </html>
  );
}
