import { setState } from "@riadh-adrani/recursive-web";

export default (padding = 0) => {
    const [val, setVal] = setState("user-video-grid-options", {
        videosPerRow: calculateVideosPerRow(innerWidth),
    });

    function calculateVideosPerRow(width) {
        if (width >= 1920) {
            return 9;
        }
        if (1550 + padding <= width && width < 1920 + padding) {
            return 8;
        }
        if (1450 + padding <= width && width < 1550 + padding) {
            return 7;
        }
        if (1325 + padding <= width && width < 1450 + padding) {
            return 6;
        }
        if (1150 + padding <= width && width < 1325 + padding) {
            return 5;
        }
        if (1000 + padding <= width && width < 1150 + padding) {
            return 4;
        }
        if (700 + padding <= width && width < 1000 + padding) {
            return 3;
        }
        return 3;
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
