import { Github, Linkedin, Mail, File} from "lucide-react"
import React from "react"

const MediaLinks = () => {
    return (
        <>
            <a href="https://github.com/sheepodeepo" target = "_blank" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/alex--lee1" target = "_blank" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
            </a>
            <a href="mailto:alexanderlee014@gmail.com" target = "_blank" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Mail size={24} />
            </a>
            <a href="/resume/Alexander_Resume.pdf" target="_blank" className="text-gray-300 hover:text-purple-400 transition-colors">
                <File size={24} />
            </a>
        </>
    )
}

export default MediaLinks;