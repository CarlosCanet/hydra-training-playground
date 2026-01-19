function Footer() {
  return (
    <footer className="bg-gray-800/30 border-t border-gray-700 justify-self-end">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">Educational Use Only</div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Environment: Development</span>
              <span>•</span>
              <span>Version: 1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
export default Footer