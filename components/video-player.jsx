"use client"

import { useState } from "react"
import ReactPlayer from "react-player/youtube"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [progress, setProgress] = useState(0)

  const youtubeUrl = "https://youtu.be/5tdAVeLTeyY" // video URL

  const togglePlay = () => setIsPlaying((prev) => !prev)
  const toggleMute = () => setIsMuted((prev) => !prev)

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center aspect-video">
      <ReactPlayer
        url={youtubeUrl}
        playing={isPlaying}
        muted={isMuted}
        volume={volume}
        width="100%"
        height="100%"
        onProgress={({ played }) => setProgress(played * 100)}
      />

      {/* Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex flex-col gap-2">
          <div className="w-full bg-white/20 rounded-full h-1 mb-2">
            <div className="bg-primary h-1 rounded-full" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button onClick={togglePlay} variant="ghost" size="icon" className="text-white">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <SkipForward className="h-5 w-5" />
              </Button>
              <span className="text-white text-sm">Progress: {Math.floor(progress)}%</span>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={toggleMute} variant="ghost" size="icon" className="text-white">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <div className="w-20 hidden sm:block">
                <Slider
                  defaultValue={[volume * 100]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0] / 100)}
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white">
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
