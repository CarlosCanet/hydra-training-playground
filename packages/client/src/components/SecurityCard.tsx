import { TbInfoOctagonFilled } from "react-icons/tb";

function SecurityCard() {
  return (
    <div className="mt-16 max-w-lg mx-auto">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4 flex items-center">
              <span className="text-blue-400 mr-2">
                <TbInfoOctagonFilled />
              </span>
              Security Notice
            </h3>
            <ul className="text-sm text-gray-400 space-y-2 list-disc">
              <li>This is a controlled testing environment</li>
              <li>All authentication attempts are logged</li>
              <li>Use only authorized testing credentials</li>
              <li>Report any unexpected behavior immediately</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecurityCard;
