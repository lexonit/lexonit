
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue, useMotionTemplate } from 'framer-motion';

// --- Utils ---
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Button ---
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:border-slate-700',
      outline: 'bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-100 dark:text-white dark:border-white/20 dark:hover:bg-white/10 dark:hover:border-white/40',
      ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5',
      accent: 'bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] dark:shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-violet-500',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// --- Card (Legacy) ---
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={cn('bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden shadow-sm dark:shadow-none', className)} {...props}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={cn('p-6 pb-3', className)} {...props}>{children}</div>
);

export const CardContent: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props}>{children}</div>
);

// --- Glowing Effect & Card ---
export const GlowingEffect = ({
  blur = 0,
  borderWidth = 3,
  spread = 80,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  mouseX,
  mouseY
}: any) => {
  const maskImage = useMotionTemplate`radial-gradient(${spread}px circle at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
       <motion.div 
          className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-60"
          style={style}
       />
    </div>
  );
};

export const GlowingCard = ({ children, className, containerClassName }: { children: React.ReactNode, className?: string, containerClassName?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className={cn("group relative h-full rounded-2xl border border-slate-200 dark:border-slate-800 p-2 md:rounded-3xl md:p-3 bg-slate-50 dark:bg-black", containerClassName)}
      onMouseMove={handleMouseMove}
    >
       <GlowingEffect mouseX={mouseX} mouseY={mouseY} spread={300} />
       <div className={cn("relative flex h-full flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]", className)}>
          {children}
       </div>
    </div>
  )
};

// --- Input ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

// --- Badge ---
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'purple';
  className?: string;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, className, variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
    outline: 'border border-slate-200 dark:border-white/20 text-slate-600 dark:text-slate-300',
    purple: 'bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20'
  };
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors', variants[variant], className)} {...props}>
      {children}
    </span>
  );
};

// --- Label ---
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => (
  <label className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300", className)} {...props}>
    {children}
  </label>
);

// --- Floating Dock ---
export const FloatingDock = ({ 
  items, 
  desktopClassName, 
  mobileClassName 
}: { 
  items: { title: string; icon: React.ReactNode; href: string }[]; 
  desktopClassName?: string; 
  mobileClassName?: string; 
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ 
  items, 
  className 
}: { 
  items: { title: string; icon: React.ReactNode; href: string }[]; 
  className?: string; 
}) => {
  return (
    <div className={cn("block md:hidden", className)}>
      <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide justify-start">
        {items.map((item) => (
           <a key={item.title} href={item.href} className="flex flex-col items-center gap-2 min-w-[64px]">
             <div className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                {item.icon}
             </div>
             <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{item.title}</span>
           </a>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ 
  items, 
  className 
}: { 
  items: { title: string; icon: React.ReactNode; href: string }[]; 
  className?: string; 
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-white/10 px-4 pb-3 backdrop-blur-sm",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let iconScaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let iconScale = useSpring(iconScaleTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs font-medium z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
            style={{ scale: iconScale }}
            className="flex items-center justify-center"
        >
            {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

// --- Lamp Component (Aceternity UI) ---
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] md:min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

// --- Sparkles Core Component (Aceternity UI) ---
export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
}) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    particleDensity,
    particleColor,
    speed = 1,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.parentElement?.offsetWidth || 0,
          height: canvasRef.current.parentElement?.offsetHeight || 0,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const particleCount = (particleDensity || 50) * (dimensions.width / 1000);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;

      constructor() {
        this.x = Math.random() * dimensions.width;
        this.y = Math.random() * dimensions.height;
        this.size = Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1);
        this.speedX = (Math.random() - 0.5) * (speed || 1) * 0.5;
        this.speedY = (Math.random() - 0.5) * (speed || 1) * 0.5;
        this.opacity = Math.random();
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > dimensions.width) this.x = 0;
        if (this.x < 0) this.x = dimensions.width;
        if (this.y > dimensions.height) this.y = 0;
        if (this.y < 0) this.y = dimensions.height;

        // Twinkle effect
        this.opacity += 0.01 * this.fadeDirection;
        if (this.opacity >= 1 || this.opacity <= 0) {
          this.fadeDirection *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor || "#FFFFFF";
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions, minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={dimensions.width}
      height={dimensions.height}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ background: background || "transparent" }}
    />
  );
};

// --- NAVBAR MENU COMPONENTS (Aceternity UI) ---
const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth transition
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth resize
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black/80 dark:border-white/[0.2] bg-white/80 shadow-input flex justify-center space-x-4 px-8 py-6 backdrop-blur-md"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  onClick // Added onClick
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  onClick?: () => void;
}) => {
  return (
    <a 
      href={href} 
      onClick={(e) => { 
        if(onClick) { 
          e.preventDefault(); 
          onClick(); 
        } 
      }} 
      className="flex space-x-2 group"
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-md group-hover:shadow-xl transition-shadow"
      />
      <div className="flex flex-col justify-center">
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white group-hover:text-violet-500 transition-colors">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, href, onClick, className, ...rest }: any) => {
  return (
    <a
      href={href}
      onClick={(e) => { if(onClick) { e.preventDefault(); onClick(); } }}
      className={cn("text-neutral-600 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors block", className)}
      {...rest}
    >
      {children}
    </a>
  );
};

// --- NEW VISUAL MOCKUPS FOR SERVICE PAGES ---

// 1. Kanban / Task Board Mockup
export const MockKanban = () => (
  <div className="w-full h-64 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex gap-4 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
    {[
      { title: 'To Do', color: 'bg-slate-200 dark:bg-slate-700' },
      { title: 'In Progress', color: 'bg-blue-200 dark:bg-blue-900' },
      { title: 'Done', color: 'bg-green-200 dark:bg-green-900' }
    ].map((col, i) => (
      <div key={i} className="flex-1 flex flex-col gap-3 min-w-[120px]">
         <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{col.title}</span>
            <div className={`w-2 h-2 rounded-full ${col.color}`} />
         </div>
         <div className="h-20 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-sm">
            <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded" />
         </div>
         <div className="h-24 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg p-3 shadow-sm">
             <div className="h-2 w-12 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
             <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded mb-2" />
             <div className="flex gap-1 mt-4">
                <div className="w-4 h-4 rounded-full bg-purple-400" />
                <div className="w-4 h-4 rounded-full bg-blue-400" />
             </div>
         </div>
      </div>
    ))}
  </div>
);

// 2. Chat Interface Mockup
export const MockChatInterface = () => (
  <div className="w-full h-64 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col overflow-hidden">
     <div className="h-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center px-4 gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
     </div>
     <div className="flex-1 p-4 space-y-3">
        <div className="flex justify-end">
           <div className="bg-violet-600 text-white text-xs px-3 py-2 rounded-lg rounded-br-none max-w-[80%]">
              Can you summarize the Q3 report?
           </div>
        </div>
        <div className="flex justify-start">
           <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-3 py-2 rounded-lg rounded-bl-none max-w-[80%]">
              <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded mb-1" />
              <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
           </div>
        </div>
        <div className="flex justify-end">
           <div className="bg-violet-600 text-white text-xs px-3 py-2 rounded-lg rounded-br-none max-w-[80%]">
              Great, email that to Sarah.
           </div>
        </div>
     </div>
  </div>
);

// 3. Calendar Mockup
export const MockCalendar = () => (
   <div className="w-full h-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 overflow-hidden flex gap-2">
      <div className="w-16 border-r border-slate-100 dark:border-slate-800 pr-2 flex flex-col gap-6 pt-2">
         <div className="text-xs text-slate-400 text-right">9 AM</div>
         <div className="text-xs text-slate-400 text-right">10 AM</div>
         <div className="text-xs text-slate-400 text-right">11 AM</div>
         <div className="text-xs text-slate-400 text-right">12 PM</div>
      </div>
      <div className="flex-1 relative pt-2">
         <div className="absolute top-4 left-0 w-full h-16 bg-violet-100 dark:bg-violet-900/30 border-l-4 border-violet-500 rounded p-2">
            <div className="h-2 w-16 bg-violet-200 dark:bg-violet-800 rounded mb-1" />
            <div className="h-2 w-24 bg-violet-200 dark:bg-violet-800 rounded" />
         </div>
         <div className="absolute top-28 left-0 w-full h-24 bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-500 rounded p-2">
            <div className="h-2 w-20 bg-emerald-200 dark:bg-emerald-800 rounded mb-1" />
            <div className="flex gap-1 mt-2">
               <div className="w-4 h-4 rounded-full bg-emerald-200 dark:bg-emerald-800" />
               <div className="w-4 h-4 rounded-full bg-emerald-200 dark:bg-emerald-800" />
            </div>
         </div>
      </div>
   </div>
);
