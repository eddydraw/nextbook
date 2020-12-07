export const ButtonDesign = "inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg ";
export const ButtonType = {
      primary: ButtonDesign + "bg-primary-DEFAULT hover:bg-primary-dark",
      secondary: ButtonDesign + "bg-secondaryA-dark hover:bg-secondaryA-darker",
      default: ButtonDesign + "bg-gray-500 hover:bg-gray-600",
      alert: ButtonDesign + " bg-secondaryB-DEFAULT hover:bg-red-600",
      warning: ButtonDesign + "bg-yellow-500 hover:bg-yellow-600",
      
      primary_hollow: ButtonDesign + " text-indigo-500 bg-opacity-0 border-solid border-2 border-indigo-500 hover:border-indigo-600",
      secondary_hollow: ButtonDesign + " text-green-500 bg-opacity-0 border-solid border-2 border-green-500 hover:border-green-600",
      default_hollow: ButtonDesign + " text-gray-500 bg-opacity-0 border-solid border-2 border-gray-500 hover:border-gray-600",
      alert_hollow: ButtonDesign + " text-red-500 bg-opacity-0 border-solid border-2 border-red-500 hover:border-red-600",
      warning_hollow: ButtonDesign + " text-yellow-500 bg-opacity-0 border-solid border-2 border-yellow-500 hover:border-yellow-600"
  };