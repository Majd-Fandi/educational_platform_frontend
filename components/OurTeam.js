const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Johnson',
      role: 'Software Engineer',
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Thompson',
      role: 'Product Manager',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'David Wilson',
      role: 'UX Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Specialist',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'James Brown',
      role: 'Data Scientist',
      imageUrl:
        'https://api.dicebear.com/7.x/pixel-art/svg?seed=JamesBrown',
    },
    {
      name: 'Linda Martinez',
      role: 'Frontend Developer',
      imageUrl:
        'https://api.dicebear.com/7.x/pixel-art/svg?seed=LindaMartinez',
    },
    {
      name: 'Robert Garcia',
      role: 'Backend Developer',
      imageUrl:
        'https://api.dicebear.com/7.x/pixel-art/svg?seed=RobertGarcia',
    },
    {
      name: 'Patricia Lee',
      role: 'HR Manager',
      imageUrl:
        'https://api.dicebear.com/7.x/pixel-art/svg?seed=PatriciaLee',
    },
    {
      name: 'William Clark',
      role: 'DevOps Engineer',
      imageUrl:
        'https://api.dicebear.com/7.x/pixel-art/svg?seed=WilliamClark',
    },
  ];
  
export default function OurTeam() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }