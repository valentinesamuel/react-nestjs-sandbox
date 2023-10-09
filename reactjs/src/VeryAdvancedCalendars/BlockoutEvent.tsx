import { Blockout } from "./Types";

export default function BlockoutEvent({ blockout }: { blockout: Blockout }) {
  return (
    <div className="bg-gray-500 h-full flex items-center justify-center">
      <p className="text-gray-300 font-bold text-sm text-center">
        {blockout.name}
      </p>
    </div>
  );
}
