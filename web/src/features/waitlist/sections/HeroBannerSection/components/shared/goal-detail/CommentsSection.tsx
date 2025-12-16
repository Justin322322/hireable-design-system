import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
} from "@/components/ui";
import {
  Bold,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Underline,
} from "lucide-react";
import type { Comment } from "./types";

function ToolbarButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex size-[15.44px] items-center justify-center rounded-[2.57px] p-[2.57px] text-neutral-900 hover:bg-neutral-100"
    >
      {icon}
    </button>
  );
}

interface CommentsSectionProps {
  comments: Comment[];
}

export function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <Card className="flex flex-1 flex-col items-start gap-[10.3px] rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white p-[10.3px] pb-[20.59px]">
      <CardContent className="flex h-full w-full flex-col gap-[10.3px] p-0">
        {/* Heading */}
        <div className="flex h-[13px] items-center gap-[6.43px]">
          <span className="font-sans text-[8.99px] leading-[150%] font-semibold tracking-[0.11px] text-neutral-900">
            Comments
          </span>
        </div>

        {/* Comments container */}
        <div className="scrollbar-hide flex w-full flex-1 flex-col items-start gap-[10.3px] self-stretch overflow-y-auto">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex w-full items-start gap-[10.3px] self-stretch"
            >
              <Avatar className="avatar-bg size-[20.59px] shrink-0 rounded-[64.35px]">
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback className="avatar-bg text-[8px]">
                  {comment.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="comment-bg flex flex-1 flex-col items-start gap-[5.15px] rounded-[5.15px] p-[10.3px]">
                <div className="flex w-full items-center gap-[5.15px] self-stretch">
                  <span className="font-sans text-[9.01px] leading-[120%] font-semibold tracking-[0.13px] text-neutral-900">
                    {comment.author}
                  </span>
                  <span className="font-sans text-[7.72px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700">
                    {comment.timeAgo}
                  </span>
                </div>
                <p className="w-full self-stretch font-sans text-[9.01px] leading-[120%] font-normal tracking-[0.13px] text-neutral-900">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="flex w-full items-start gap-[10.3px] self-stretch">
          <Avatar className="avatar-bg-light size-[20.59px] shrink-0 rounded-[64.35px]">
            <AvatarImage src="/images/Jacob-Smith.svg" alt="Jacob Smith" />
            <AvatarFallback className="text-[8px]">JS</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col items-start gap-[10.3px]">
            <textarea
              placeholder="Add a comment..."
              className="flex min-h-[51.48px] w-full resize-none items-start gap-[5.15px] self-stretch rounded-[5.15px] border-[0.64px] border-neutral-300 bg-white px-[10.3px] py-[7.72px] font-sans text-[9.01px] leading-[120%] font-normal tracking-[0.13px] text-neutral-700 focus:outline-none"
            />
            <div className="flex w-full items-center justify-between gap-[5.15px] self-stretch">
              <div className="flex items-start gap-[7.72px] rounded-[2.57px]">
                <ToolbarButton icon={<Bold className="size-[10.3px]" />} />
                <ToolbarButton icon={<Italic className="size-[10.3px]" />} />
                <ToolbarButton icon={<Underline className="size-[10.3px]" />} />
                <ToolbarButton icon={<List className="size-[10.3px]" />} />
                <ToolbarButton
                  icon={<ListOrdered className="size-[10.3px]" />}
                />
                <ToolbarButton icon={<Link2 className="size-[10.3px]" />} />
                <ToolbarButton icon={<ImageIcon className="size-[10.3px]" />} />
              </div>
              <Button
                size="sm"
                variant="default"
                className="h-[23.16px] gap-[5.15px] rounded-[5.15px] px-[7.72px] py-[5.15px]"
              >
                <span className="font-sans text-[9.01px] leading-[96%] font-semibold text-white">
                  Post a comment
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
