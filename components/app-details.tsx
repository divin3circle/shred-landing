import { getAppData } from "@/constants";

async function AppDetails({ appName = "gosetup" }) {
  const content = getAppData(appName);
  return (
    <div className="mt-10 border-b border-gray-200 pb-10">
      <div className="font-sans leading-relaxed">
        <p className="font-sans leading-relaxed text-sm text-slate-700">
          {content.description}
        </p>
        <h2 className="mt-6 mb-2 text-base font-bold">Features</h2>
        <ul className="list-disc list-inside ml-4 text-sm text-slate-700">
          {content.features.map((feature, index) => (
            <li key={index} className="mb-1">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppDetails;
