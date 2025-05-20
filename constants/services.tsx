import { MdDeveloperMode, MdSecurity, MdCloud, MdHeadsetMic } from "react-icons/md";
import { AiOutlineCode, AiOutlineSafety } from "react-icons/ai";
import { BsFillBookmarkCheckFill, BsPen, BsWifi, BsHddNetwork, BsServer } from "react-icons/bs";
import { GrDeploy, GrVmMaintenance } from "react-icons/gr";
import { BiRocket, BiSupport, BiData } from "react-icons/bi";
import { FaLaptopCode, FaNetworkWired, FaDatabase, FaProjectDiagram, FaPhoneAlt, FaRecycle } from "react-icons/fa";
import { HiOutlineComputerDesktop, HiOutlineServerStack } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics, TbDeviceAnalytics, TbDeviceAudioTape } from "react-icons/tb";
import { ImMoveUp } from "react-icons/im";
import { SiCitrix } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoHardwareChipOutline } from "react-icons/io5";

// Service categories
export const categories = [
  { id: "operate", name: "Operate" },
  { id: "protect", name: "Protect" },
  { id: "transform", name: "Transform" },
];

export const services = [
  {
    id: 0,
    title: "24/7 Help-Desk (JP/EN)",
    description: `Bilingual support available around the clock to solve your IT issues immediately, regardless of time zone.`,
    icon: <MdHeadsetMic className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    category: "operate",
  },
  {
    id: 1,
    title: "Same-Day Onsite Response",
    description: `Skilled technicians at your office within hours, not days, solving hardware emergencies with minimal disruption.`,
    icon: <BiSupport className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    category: "operate",
  },
  {
    id: 2,
    title: "Multi-Layer Security Shield",
    description: `Protect your business from ransomware, phishing, and intrusions with our comprehensive defense system.`,
    icon: <MdSecurity className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    category: "protect",
  },
  {
    id: 3,
    title: "Bilingual IT Strategy",
    description: `Navigate complex technology decisions with expert guidance that bridges language and cultural gaps for global operations.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-gray-500 stroke-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    category: "transform",
  },
  {
    id: 4,
    title: "Office Cabling & Wi-Fi Roll-outs",
    description: `Eliminate dead zones and slow connections with enterprise-grade networking built for your specific office layout.`,
    icon: <BsWifi className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    category: "transform",
  },
  {
    id: 5,
    title: "Lifecycle Equipment Management",
    description: `Never worry about outdated hardware with our proactive replacement planning that prevents costly emergency upgrades.`,
    icon: <TbDeviceDesktopAnalytics className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    category: "operate",
  },
  {
    id: 6,
    title: "Preventive Maintenance Program",
    description: `Avoid unexpected hardware failures with regular health checks that catch issues before they impact your business.`,
    icon: <IoHardwareChipOutline className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    category: "operate",
  },
  {
    id: 7,
    title: "Enterprise Network Design",
    description: `Custom-built network infrastructure that grows with your business and eliminates bottlenecks during peak operations.`,
    icon: <FaNetworkWired className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    category: "transform",
  },
  {
    id: 8,
    title: "Japanese/English Support Desk",
    description: `Bilingual technicians who understand both your technology and cultural context for smoother problem resolution.`,
    icon: <BiSupport className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    category: "operate",
  },
  {
    id: 9,
    title: "Zero-Downtime Office Moves",
    description: `Relocate your entire IT infrastructure over a weekend with business operations ready to continue Monday morning.`,
    icon: <ImMoveUp className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    category: "operate",
  },
  {
    id: 10,
    title: "Secure Data Destruction",
    description: `Guaranteed data elimination from old devices with certified compliance documentation for regulatory requirements.`,
    icon: <FaRecycle className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    category: "protect",
  },
  {
    id: 11,
    title: "Hardware Procurement & Setup",
    description: `Ready-to-use equipment delivered and configured for your specific needs, eliminating compatibility issues.`,
    icon: <HiOutlineComputerDesktop className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    category: "operate",
  },
  {
    id: 12,
    title: "Legacy System Modernization",
    description: `Upgrade outdated systems while preserving your critical business data and minimizing training requirements.`,
    icon: <GrDeploy className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    category: "transform",
  },
  {
    id: 13,
    title: "Hybrid-Cloud Migration",
    description: `Seamlessly move from on-premise to cloud with zero downtime, maintaining access to critical files from anywhere.`,
    icon: <MdCloud className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    category: "transform",
  },
  {
    id: 14,
    title: "Audio Visual Solutions",
    description: `Cutting-edge AV technology installation and support for enhanced communication and presentation capabilities.`,
    icon: <TbDeviceAudioTape className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    id: 15,
    title: "Access Control and Surveillance",
    description: `Integrated security systems with access control and video surveillance to protect your facilities and assets.`,
    icon: <RiLockPasswordLine className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    id: 16,
    title: "Fluke Tester Survey",
    description: `Precise network cable testing and certification to ensure optimal performance and reliability of your infrastructure.`,
    icon: <TbDeviceAnalytics className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 17,
    title: "Citrix Workplace Services",
    description: `Expert implementation and support for Citrix virtual workspaces, enabling secure remote access to applications and data.`,
    icon: <SiCitrix className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    id: 18,
    title: "Data Backup and Recovery",
    description: `Robust data protection strategies with reliable backup and recovery solutions to safeguard your critical information.`,
    icon: <FaDatabase className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    id: 19,
    title: "Virtualization Services",
    description: `Optimize your IT infrastructure with virtualization solutions that increase efficiency and reduce hardware costs.`,
    icon: <HiOutlineServerStack className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    id: 20,
    title: "IT Project Management",
    description: `Expert planning and execution of technology projects, ensuring on-time delivery within budget and scope requirements.`,
    icon: <FaProjectDiagram className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    id: 21,
    title: "Cybersecurity Training",
    description: `Comprehensive security awareness programs to educate your staff on best practices for protecting sensitive information.`,
    icon: <AiOutlineSafety className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    id: 22,
    title: "VoIP Solutions",
    description: `Modern voice communication systems that enhance collaboration and reduce costs through internet-based telephony.`,
    icon: <FaPhoneAlt className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    id: 23,
    title: "Service Desk Services",
    description: `Responsive support for all your IT needs with dedicated service desk professionals available to resolve issues quickly.`,
    icon: <MdHeadsetMic className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
];
