import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NoticeProps {
  title: string;
  date: string;
  fileUrl?: string; // optional PDF or image link
}

export default function NoticeCard({ title, date, fileUrl }: NoticeProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex items-start gap-4">
        <FileText className="text-primary w-6 h-6 flex-shrink-0" />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{date}</p>

          {fileUrl && (
            <Link
              href={fileUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-primary font-medium mt-3 hover:underline"
            >
              View / Download <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
