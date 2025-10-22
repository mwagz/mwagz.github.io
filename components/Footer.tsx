export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Matthew Wagner</h3>
          <p className="text-gray-400">Front End Engineer</p>

          <div className="pt-6 border-t border-gray-700 mt-6">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Matthew Wagner. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
