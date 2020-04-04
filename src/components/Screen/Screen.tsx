import React from "react";
import css from "./screen.module.scss";
import { motion, useCycle } from "framer-motion";
import { Logo } from "../Logo/Logo";

export interface WH {
    width: number;
    height: number;
}

export const Screen = ({ width, height }: WH) => {
    const logoSize: WH = {
        width: 160,
        height: 90,
    };
    const THRESHOLD = 2;
    const colorsAvailable: string[] = [
        "#ffec00",
        "#ca22ff",
        "#ec8818",
        "#ff218e",
        "#012fff",
    ];

    const maxX = width - logoSize.width;
    const maxY = height - logoSize.height;

    const xPath: number[] = [0, maxX, 0];
    const yPath: number[] = [0, maxY, 0];

    const [color, cycleColor] = useCycle(...colorsAvailable);

    return (
        <div className={css.screen} style={{ width: width, height: height }}>
            <motion.div
                animate={{ x: xPath }}
                transition={{ duration: 8, loop: Infinity }}
                onUpdate={(latest) => {
                    if (latest.x > maxX - THRESHOLD || latest.x < THRESHOLD) {
                        cycleColor();
                    }
                }}
            >
                <motion.div
                    animate={{ y: yPath }}
                    transition={{ duration: 5, loop: Infinity }}
                    onUpdate={(latest) => {
                        if (
                            latest.y > maxY - THRESHOLD ||
                            latest.y < THRESHOLD
                        ) {
                            cycleColor();
                        }
                    }}
                >
                    <Logo
                        width={logoSize.width}
                        height={logoSize.height}
                        color={color}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
