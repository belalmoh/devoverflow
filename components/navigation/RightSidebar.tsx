import Link from "next/link";
import ROUTES from "@/constants/routes";
import React from "react";
import Image from "next/image";
import TagCard from "@/components/cards/TagCard";

const hotQuestions = [
    {
        _id: "1",
        title: "What is the best way to learn React?",
    },
    {
        _id: "2",
        title: "How to use Tailwind CSS?",
    },
    {
        _id: "3",
        title: "How to use React Router?",
    },
];

const popularTags = [
    {
        _id: "1",
        name: "react",
        questions: 10,
    },
    {
        _id: "2",
        name: "nextjs",
        questions: 120,
    },
    {
        _id: "3",
        name: "typescript",
        questions: 10080,
    },
    {
        _id: "4",
        name: "javascript",
        questions: 310,
    },
    {
        _id: "5",
        name: "nodejs",
        questions: 1500,
    },
];

const RightSidebar = () => {
    return (
        <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((question) => (
                        <Link
                            href={ROUTES.QUESTION(question._id)}
                            key={question._id}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">
                                {question.title}
                            </p>
                            <Image
                                src="/icons/chevron-right.svg"
                                alt="chevron-right"
                                width={20}
                                height={20}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map((tag) => (
                        <TagCard key={tag._id} {...tag} showCount compact />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;
