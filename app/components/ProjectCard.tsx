import Link from "next/link"
import Pill from "./Pill"
import { ProjectCardProps } from "@/app/types"
import { FaGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export default function ProjectCard({ project }: ProjectCardProps) {


    /* this code is for video play functionality on card hover
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };
    */

    const pillClasses = [
        "bg-orange-100 text-orange-400 border-orange-400",
        "bg-pink-100 text-pink-400 border-pink-400",
        "bg-blue-100 text-blue-400 border-blue-400"
    ];

    return (
        <div
            className="bg-grey-800 rounded-xl p-2 shadow-[4px_4px_24px_4px_rgba(0,0,0,0.10),12px_4px_32px_8px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[8px_8px_32px_8px_rgba(80,0,200,0.18),24px_8px_48px_16px_rgba(80,0,200,0.28)] hover:shadow-purple-400/40 relative max-w-md mx-auto flex flex-col gap-3"
            style={{ boxShadow: '4px 4px 24px 4px rgba(12, 33, 226, 0.1), 12px 4px 32px 8px rgba(20, 53, 220, 0.18)' }} data-cursor="project"
        >
            {/* Video/Image Preview */}
            {project.video_link ? (
                <div className="rounded-lg overflow-hidden aspect-video bg-black">
                    <video
                        autoPlay
                        className="w-full h-full object-cover hover:play"
                        src={project.video_link}
                        loop
                        muted
                    />
                </div>
            ) : (
                <div className="rounded-t-lg overflow-hidden aspect-video bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold opacity-80">{project.name[0] || '?'}</span>
                </div>
            )}

            
            <div className="p-2 flex flex-col gap-2">
                {/* Title */}
                <h2 className="text-2xl font-semibold mt-1 text-gray-900">{project.name}</h2>
                {/* Description */}
                <p className="text-gray-700 text-base mb-2">{project.description}</p>

                {/* Links */}
                <div className="flex gap-3">
                    {project.links?.github && (
                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-medium shadow border border-gray-300 transition">
                                <FaGithub className="text-gray-700"/>
                                GitHub
                            </button>
                        </Link>
                    )}
                    {project.links?.website && (
                        <Link href={project.links.website} target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-medium shadow border border-gray-300 transition">
                                <CiGlobe className="text-gray-700"/>
                                Website
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 p-4 justify-center">
                {project.technologies.map((tech, idx) => (
                    <Pill
                        key={idx}
                        className={pillClasses[idx % pillClasses.length]}
                    >
                        {tech}
                    </Pill>
                ))}
            </div>
        </div>
    );
}
