import {
  Award, Baby, Backpack, BadgeCheck, BookOpen, Brain, Building2, Bus, Calendar, CalendarDays,
  CheckCircle2, Clock, Compass, Database, Eye, FlaskConical, Footprints, Globe2, GraduationCap,
  Heart, Medal, MonitorPlay, Music, Palette, PersonStanding, Rocket, School, ShieldCheck,
  Sparkles, Star, Sun, Sunset, Timer, Trophy, Users,
} from "lucide-react";

// Icons are stored in content as plain names (e.g. "Trophy") so the data can live in
// localStorage / a database. Add an icon here to make it selectable in the admin panel.
export const ICONS = {
  Award, Baby, Backpack, BadgeCheck, BookOpen, Brain, Building2, Bus, Calendar, CalendarDays,
  CheckCircle2, Clock, Compass, Database, Eye, FlaskConical, Footprints, Globe2, GraduationCap,
  Heart, Medal, MonitorPlay, Music, Palette, PersonStanding, Rocket, School, ShieldCheck,
  Sparkles, Star, Sun, Sunset, Timer, Trophy, Users,
};

export const ICON_NAMES = Object.keys(ICONS);

export function getIcon(name, fallback = Sparkles) {
  return ICONS[name] || fallback;
}
