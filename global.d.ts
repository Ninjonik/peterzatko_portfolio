import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
	interface MotionProps extends OriginalMotionProps {
		className?: string;
		onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
		onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
		onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
		onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
		style?: React.CSSProperties;
		transition?: {
			delay?: number;
			duration?: number;
			ease?: string | string[];
			type?: "spring" | "tween" | "inertia" | "keyframes";
			stiffness?: number;
			damping?: number;
			repeat?: number;
			repeatType?: "loop" | "reverse" | "mirror";
		};
		initial?: boolean | { [key: string]: any };
		whileInView?: boolean | { [key: string]: any };
		animate?: boolean | { [key: string]: any };
		exit?: boolean | { [key: string]: any };
	}
}
