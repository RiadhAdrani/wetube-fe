import { setState } from "@riadh-adrani/recursive-web";

export default (padding = 0) => {
    const [val, setVal] = setState("home-video-grid-options", {
        videosPerRow: calculateVideosPerRow(innerWidth),
    });

    function calculateVideosPerRow(width) {
        if (width >= 1920) {
            return 5;
        }
        if (1300 + padding <= width && width < 1920 + padding) {
            return 4;
        }
        if (1000 + padding <= width && width < 1300 + padding) {
            return 3;
        }
        if (700 + padding <= width && width < 1000 + padding) {
            return 2;
        }
        if (350 + padding <= width && width < 700 + padding) {
            return 1;
        }
        return 1;
    }

    function arrangeVideos(videos = []) {
        const perRow = val.videosPerRow;
        const output = [];

        for (let i = 0; i < videos.length; i = i + perRow) {
            output.push(videos.slice(i, i + perRow));
        }

        return output;
    }

    return {
        videosPerRow: val.videosPerRow,
        onResied: () => {
            if (calculateVideosPerRow(innerWidth) === val.videosPerRow) return;

            setVal({ ...val, videosPerRow: calculateVideosPerRow(innerWidth) });
        },
        arrangeVideos,
    };
};
