import { useState } from 'react'
import './Results.css'

function Results({ preferences, onBack }) {
  const [selectedDesign, setSelectedDesign] = useState(null)

  // Complete interior design collection
  const designs = [

    // ================= LIVING ROOM =================
    {
      id: 1,
      name: 'Modern Elegant Living Room',
      room: 'Living Room',
      style: 'Modern',
      colour: 'Neutral',
      budget: 65000,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200'
    },
    {
      id: 2,
      name: 'Luxury Living Space',
      room: 'Living Room',
      style: 'Luxury',
      colour: 'Warm',
      budget: 190000,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
    },
    {
      id: 3,
      name: 'Minimalist Living Room',
      room: 'Living Room',
      style: 'Minimalist',
      colour: 'Neutral',
      budget: 85000,
      image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200'
    },
    {
      id: 4,
      name: 'Contemporary Living Room',
      room: 'Living Room',
      style: 'Contemporary',
      colour: 'Warm',
      budget: 125000,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
    },
    {
      id: 5,
      name: 'Classic Traditional Living Room',
      room: 'Living Room',
      style: 'Traditional',
      colour: 'Dark',
      budget: 150000,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    },
    {
      id: 6,
      name: 'Scandinavian Living Room',
      room: 'Living Room',
      style: 'Scandinavian',
      colour: 'Pastel',
      budget: 95000,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200'
    },

    // ================= BEDROOM =================
    {
      id: 7,
      name: 'Modern Bedroom',
      room: 'Bedroom',
      style: 'Modern',
      colour: 'Neutral',
      budget: 60000,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200'
    },
    {
      id: 8,
      name: 'Luxury Bedroom',
      room: 'Bedroom',
      style: 'Luxury',
      colour: 'Dark',
      budget: 180000,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200'
    },
    {
      id: 9,
      name: 'Minimalist Bedroom',
      room: 'Bedroom',
      style: 'Minimalist',
      colour: 'Pastel',
      budget: 75000,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200'
    },
    {
      id: 10,
      name: 'Contemporary Bedroom',
      room: 'Bedroom',
      style: 'Contemporary',
      colour: 'Warm',
      budget: 115000,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200'
    },
    {
      id: 11,
      name: 'Traditional Bedroom',
      room: 'Bedroom',
      style: 'Traditional',
      colour: 'Dark',
      budget: 145000,
      image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?w=1200'
    },
    {
      id: 12,
      name: 'Scandinavian Bedroom',
      room: 'Bedroom',
      style: 'Scandinavian',
      colour: 'Neutral',
      budget: 95000,
      image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=1200'
    },

    // ================= KITCHEN =================
    {
      id: 13,
      name: 'Modern Modular Kitchen',
      room: 'Kitchen',
      style: 'Modern',
      colour: 'Neutral',
      budget: 110000,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200'
    },
    {
      id: 14,
      name: 'Warm Contemporary Kitchen',
      room: 'Kitchen',
      style: 'Contemporary',
      colour: 'Warm',
      budget: 135000,
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200'
    },
    {
      id: 15,
      name: 'Minimalist Kitchen',
      room: 'Kitchen',
      style: 'Minimalist',
      colour: 'Neutral',
      budget: 85000,
      image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200'
    },
    {
      id: 16,
      name: 'Luxury Kitchen',
      room: 'Kitchen',
      style: 'Luxury',
      colour: 'Dark',
      budget: 200000,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
    },
    {
      id: 17,
      name: 'Traditional Kitchen',
      room: 'Kitchen',
      style: 'Traditional',
      colour: 'Warm',
      budget: 155000,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
    },
    {
      id: 18,
      name: 'Scandinavian Kitchen',
      room: 'Kitchen',
      style: 'Scandinavian',
      colour: 'Pastel',
      budget: 95000,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200'
    },

    // ================= DINING ROOM =================
    {
      id: 19,
      name: 'Modern Dining Room',
      room: 'Dining Room',
      style: 'Modern',
      colour: 'Neutral',
      budget: 70000,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200'
    },
    {
      id: 20,
      name: 'Luxury Dining Space',
      room: 'Dining Room',
      style: 'Luxury',
      colour: 'Dark',
      budget: 175000,
      image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=1200'
    },
    {
      id: 21,
      name: 'Contemporary Dining Area',
      room: 'Dining Room',
      style: 'Contemporary',
      colour: 'Warm',
      budget: 120000,
      image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?w=1200'
    },
    {
      id: 22,
      name: 'Minimalist Dining Room',
      room: 'Dining Room',
      style: 'Minimalist',
      colour: 'Neutral',
      budget: 80000,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'
    },
    {
      id: 23,
      name: 'Traditional Dining Room',
      room: 'Dining Room',
      style: 'Traditional',
      colour: 'Warm',
      budget: 145000,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200'
    },
    {
      id: 24,
      name: 'Scandinavian Dining Room',
      room: 'Dining Room',
      style: 'Scandinavian',
      colour: 'Pastel',
      budget: 95000,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
    }
  ]

  // Normalize text to avoid capitalization and spacing problems
  const normalize = (value) =>
    String(value || '').trim().toLowerCase()

  // Find designs for the selected room
  const roomDesigns = designs.filter(
    design => normalize(design.room) === normalize(preferences?.room)
  )

  // Convert budget into a number
  const userBudget = Number(preferences?.budget) || 0

  // Find designs within budget
  const budgetDesigns = roomDesigns.filter(
    design => design.budget <= userBudget
  )

  // Show alternatives if no designs fit the budget
  const hasBudgetMatches = budgetDesigns.length > 0

  const availableDesigns = hasBudgetMatches
    ? budgetDesigns
    : roomDesigns

  // Calculate recommendation score
  const matchingDesigns = availableDesigns
    .map(design => {
      let score = 40

      if (normalize(design.style) === normalize(preferences?.style)) {
        score += 30
      }

      if (normalize(design.colour) === normalize(preferences?.colour)) {
        score += 20
      }

      const withinBudget = design.budget <= userBudget

      if (withinBudget) {
        score += 10
      }

      return {
        ...design,
        score,
        withinBudget
      }
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }

      return a.budget - b.budget
    })

  // Confirm design selection
  const handleConfirmSelection = () => {
    if (selectedDesign) {
      alert(`You selected: ${selectedDesign.name}`)
    }
  }

  return (
    <div className="results-page">

      {/* HEADER */}
      <div className="results-header">

        <button
          className="results-back"
          onClick={onBack}
        >
          ← Back to Preferences
        </button>

        <p className="results-tag">
          PERSONALIZED RECOMMENDATIONS
        </p>

        <h1>Discover Your Dream Interior</h1>

        <p>
          Explore designs selected according to your preferences and budget.
        </p>

      </div>

      {/* PREFERENCE SUMMARY */}
      <div className="preference-summary">

        <h3>Your Preferences</h3>

        <div className="summary-grid">

          <p>
            <strong>Room:</strong> {preferences?.room}
          </p>

          <p>
            <strong>Dimensions:</strong>{' '}
            {preferences?.length} × {preferences?.width} feet
          </p>

          <p>
            <strong>Style:</strong> {preferences?.style}
          </p>

          <p>
            <strong>Colour:</strong> {preferences?.colour}
          </p>

          <p>
            <strong>Maximum Budget:</strong>{' '}
            ₹{userBudget.toLocaleString('en-IN')}
          </p>

        </div>

      </div>

      {/* GALLERY HEADING */}
      <div className="gallery-heading">

        <div>

          <p className="results-tag">
            EXPLORE COLLECTION
          </p>

          <h2>{preferences?.room} Designs</h2>

          <p>
            Choose your favourite interior design.
          </p>

        </div>

        <span className="design-count">
          {matchingDesigns.length} Designs Found
        </span>

      </div>

      {/* BUDGET WARNING */}
      {!hasBudgetMatches && roomDesigns.length > 0 && (

        <div className="no-results">

          <h3>No designs are within your selected budget.</h3>

          <p>
            Here are alternative designs for your selected room.
            Their estimated costs are higher than your budget.
          </p>

        </div>

      )}

      {/* DESIGN COLLECTION */}
      {matchingDesigns.length > 0 ? (

        <div className="results-container">

          {matchingDesigns.map(design => (

            <div
              className={`design-card ${
                selectedDesign?.id === design.id
                  ? 'selected-card'
                  : ''
              }`}
              key={design.id}
            >

              {/* IMAGE */}
              <div className="design-image">

                <img
                  src={design.image}
                  alt={design.name}
                  loading="lazy"
                />

              </div>

              {/* DETAILS */}
              <div className="design-info">

                <h3>{design.name}</h3>

                <p className="design-room">
                  {design.room}
                </p>

                <div className="design-details">

                  <p>
                    <strong>Style:</strong> {design.style}
                  </p>

                  <p>
                    <strong>Colour:</strong> {design.colour}
                  </p>

                  <p>
                    <strong>Estimated Cost:</strong>{' '}
                    ₹{design.budget.toLocaleString('en-IN')}
                  </p>

                </div>

                {/* BUDGET STATUS */}
                <p className="match-score">
                  {design.withinBudget
                    ? '✓ Within Your Budget'
                    : '⚠ Over Your Budget'}
                </p>

                {/* MATCH SCORE */}
                <p className="match-score">
                  Match Score: {design.score}%
                </p>

                {/* SELECT DESIGN */}
                <button
                  className={
                    selectedDesign?.id === design.id
                      ? 'select-design selected-button'
                      : 'select-design'
                  }
                  onClick={() => setSelectedDesign(design)}
                >
                  {selectedDesign?.id === design.id
                    ? '✓ Selected'
                    : 'Select This Design'}
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="no-results">

          <h3>No designs found for this room.</h3>

          <p>
            Please go back and select one of the available room types:
            Living Room, Bedroom, Kitchen or Dining Room.
          </p>

        </div>

      )}

      {/* SELECTED DESIGN */}
      {selectedDesign && (

        <div className="selected-design-panel">

          <p className="results-tag">
            YOUR SELECTED DESIGN
          </p>

          <h2>{selectedDesign.name}</h2>

          <p>
            Estimated Cost: ₹
            {selectedDesign.budget.toLocaleString('en-IN')}
          </p>

          {!selectedDesign.withinBudget && (
            <p>
              Note: This design exceeds your selected budget.
            </p>
          )}

          <button
            className="confirm-selection"
            onClick={handleConfirmSelection}
          >
            Confirm My Design
          </button>

        </div>

      )}

    </div>
  )
}

export default Results
