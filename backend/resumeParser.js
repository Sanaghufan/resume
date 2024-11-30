const extractData = (text) => {
    
    const skills = extractSkills(text);
    const qualifications = extractQualifications(text);
  
    return {  skills, qualifications };
  };
  
 
  const extractSkills = (text) => {
    const skillKeywords = [
        // Core Engineering Disciplines
    'Mechanical Engineering', 'Electrical Engineering', 'Electronics Engineering',
    'Communication Engineering', 'Computer Science', 'Civil Engineering',
    'Structural Engineering', 'Thermal Engineering', 'Instrumentation Engineering',

    // Specialized Technical Skills
    'Robotics', 'Automation', 'Mechatronics', 'Radar Systems',
    'Aerospace Engineering', 'Satellite Communication', 'Propulsion Systems',
    'Weapon Systems', 'Guidance Systems', 'Ballistics', 'Explosives',
    'Material Science', 'Composite Materials', 'Metallurgy',
    'Nanotechnology', 'Polymers', 'Smart Materials',
    'Electromagnetic Systems', 'RF Engineering', 'Radar Signal Processing',
    'Digital Signal Processing', 'Image Processing', 'Embedded Systems',
    'Cryptography', 'Network Security', 'Quantum Computing', 'Quantum Sensors',
    'AI', 'Machine Learning', 'Deep Learning', 'Cybersecurity',
    'Blockchain', 'Big Data Analytics', 'Cloud Computing', 'IoT',
    'Hypersonics', 'Thermal Protection Systems', 'Space Surveillance',
    'Optoelectronics', 'Photonics', 'Laser Technology',

    // IT and Software Development
    'Software Development', 'System Integration', 'System Administration',
    'High-Performance Computing', 'Parallel Computing',
    'MATLAB', 'Simulink', 'AutoCAD', 'CATIA', 'SolidWorks',
    'Python', 'C++', 'Java', 'C', 'R', 'SQL', 'JavaScript',
    'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn',
    'ANSYS', 'Abaqus', 'SPSS', 'SAS', 'Hadoop', 'Spark',
    'VHDL', 'Verilog', 'Linux', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'GCP', 'Altium Designer',

    // Emerging Technology Skills
    'AI in Warfare', 'Autonomous Vehicles', 'Bioinformatics',
    'Environmental Science', 'Directed Energy Weapons',
    '5G Communication', 'Quantum Cryptography', 'Real-Time Systems',
    'Wearable Technologies', 'Biodefense Research',
    'Human-Computer Interaction', 'Smart Weaponry',
    'Electro-Optic Systems', 'Sensor Networks', 'Wireless Communication',

    // Managerial and Administrative Skills
    'Project Management', 'Procurement', 'Supply Chain Management',
    'Policy Analysis', 'Leadership', 'Team Coordination',
    'Risk Assessment', 'Budget Planning', 'Strategic Thinking',

    // Defense-Specific Domains
    'Defense Systems Design', 'Military Strategy Analysis',
    'Unmanned Aerial Vehicles (UAV)', 'Submarine Technology',
    'Underwater Acoustics', 'Sonar Systems',
    'Radar Cross Section Reduction', 'Stealth Technology',

    // Testing, Prototyping, and Maintenance
    'Prototyping', 'Testing and Evaluation', 'Quality Assurance',
    'Reliability Engineering', 'Maintenance Engineering',
    'Assembly and Integration of Defense Equipment',
    'Calibration and Instrumentation', 'Failure Analysis'
      ]; // Extend this list
    return skillKeywords.filter((skill) => text.toLowerCase().includes(skill.toLowerCase()));
  };
  
  const extractQualifications = (text) => {
    const qualificationKeywords = [
        // General Degrees
    'Bachelor', 'Master', 'PhD', 'Doctorate',

    // Engineering Qualifications
    'B.E.', 'B.Tech', 'M.E.', 'M.Tech','BTech','MTech',
    'Bachelor of Engineering', 'Master of Engineering',
    'Bachelor of Technology', 'Master of Technology',
    'Diploma in Engineering',

    // Science and Research
    'B.Sc', 'M.Sc', 'PhD in Physics', 'PhD in Chemistry',
    'PhD in Mathematics', 'Doctorate in Science',
    'M.S.', 'Integrated M.Tech', 'Integrated PhD',

    // Specialized Defense Qualifications
    'Aerospace Engineering Degree', 'Naval Architecture Degree',
    'Robotics Certification', 'AI and ML Specialization',
    'Cybersecurity Certification', 'Embedded Systems Training',
    'Advanced Computing Certification', 'Quantum Computing Specialization',
    'Space Technology Certification', 'Laser Technology Training',

    // Management and Administrative Qualifications
    'MBA', 'BBA', 'LLB', 'Project Management Certification (PMP)',
    'Supply Chain Management Certification', 'Defense Procurement Certification',

    // IT and Cybersecurity
    'CEH', 'CISSP', 'CCNA', 'AWS Solutions Architect',
    'Google Cloud Certification', 'Microsoft Azure Certification',

    // Vocational and Technical Qualifications
    'ITI Certification', 'Diploma in Electronics',
    'Diploma in Mechanical Engineering', 'Certified Welder',
    'CNC Machining Certification', 'Quality Assurance Certification',

    // Defense-Specific and Emerging Technology
    'Nuclear Engineering Degree', 'Hypersonics Specialization',
    'Weapon Systems Certification', 'UAV Training',
    'Advanced Radar Systems Certification', 'Stealth Technology Course',
    'Biotechnology Degree', 'Environmental Science Degree',
    'Artificial Intelligence in Warfare Certification'

      ];
    return qualificationKeywords.filter((qual) => text.toLowerCase().includes(qual.toLowerCase()));
  };
  
  module.exports = { extractData };
  