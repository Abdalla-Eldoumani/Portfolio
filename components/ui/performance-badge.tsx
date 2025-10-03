"use client";

import { motion } from 'framer-motion';
import { Zap, TrendingUp, Activity } from 'lucide-react';

interface PerformanceBadgeProps {
  metric: string;
  icon?: 'zap' | 'trending' | 'activity';
  delay?: number;
}

/**
 * Animated performance metric badge
 * Showcases technical achievements with visual impact
 */
export const PerformanceBadge = ({
  metric,
  icon = 'zap',
  delay = 0
}: PerformanceBadgeProps) => {
  const icons = {
    zap: Zap,
    trending: TrendingUp,
    activity: Activity,
  };

  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full"
    >
      <Icon className="w-3.5 h-3.5 text-emerald-400" />
      <span className="text-xs font-semibold text-emerald-400 numeric-tabular">
        {metric}
      </span>
    </motion.div>
  );
};
