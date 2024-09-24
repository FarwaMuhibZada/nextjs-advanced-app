export default function About() {
  return (
    <div className="bg-gray-100">
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl mb-6">
            Learn more about our mission, vision, and the team behind BlogApp.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At BlogApp, we strive to create a platform for sharing knowledge, inspiring creativity, and fostering community.
          </p>
          <p className="text-lg text-gray-700">
            We believe in the power of words and ideas to connect people and make a positive impact.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://via.placeholder.com/400x250?text=Member+${index + 1}`}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Team Member {index + 1}</h3>
                  <p className="text-gray-600 mb-4">Role: Blog Writer</p>
                  <p className="text-gray-600">
                    A brief description about the team member goes here, highlighting their contributions and interests.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Our Values</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>Integrity: We are committed to honesty and transparency.</li>
            <li>Community: We value the connections we build with our readers and contributors.</li>
            <li>Creativity: We encourage innovative ideas and fresh perspectives.</li>
            <li>Respect: We treat everyone with dignity and respect.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
