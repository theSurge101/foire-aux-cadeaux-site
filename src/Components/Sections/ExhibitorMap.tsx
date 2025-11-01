import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, Maximize, MapPin, X } from 'lucide-react';

interface Exhibitor {
  id: number;
  name: string;
  standNumber: string;
  category: string;
  logo: string;
  coordinates: {
    x: number;
    y: number;
  };
}

interface ExhibitorMapProps {
  exhibitors: Exhibitor[];
  selectedExhibitor?: Exhibitor | null;
  onExhibitorClick: (exhibitor: Exhibitor) => void;
}

const ExhibitorMap: React.FC<ExhibitorMapProps> = ({
  exhibitors,
  selectedExhibitor,
  onExhibitorClick
}) => {
  const [hoveredStand, setHoveredStand] = useState<number | null>(null);

  // Category colors for pins
  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      fashion: '#EC4899',
      jewelry: '#F59E0B',
      beauty: '#10B981',
      home: '#8B5CF6',
      food: '#F97316',
      art: '#3B82F6',
      accessories: '#6366F1'
    };
    return colors[category] || '#6B7280';
  };

  return (
    <div className="relative w-full h-[600px] bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-200">
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button
                onClick={() => zoomIn()}
                className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-all"
                title="Zoom in"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={() => zoomOut()}
                className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-all"
                title="Zoom out"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={() => resetTransform()}
                className="bg-white hover:bg-gray-100 p-3 rounded-lg shadow-lg transition-all"
                title="Reset view"
              >
                <Maximize size={20} />
              </button>
            </div>

            {/* Legend */}
            <div className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-semibold text-sm mb-2">Légende</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Mode</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span>Bijoux</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Beauté</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Déco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Food</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Art</span>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '100%' }}
              contentStyle={{ width: '100%', height: '100%' }}
            >
              <div className="relative w-full h-full">
                {/* Floor Plan Background */}
                <svg
                  viewBox="0 0 1000 800"
                  className="w-full h-full"
                  style={{ minWidth: '1000px', minHeight: '800px' }}
                >
                  {/* Simple Floor Plan - Replace with actual SVG/image */}
                  <rect x="0" y="0" width="1000" height="800" fill="#f9fafb" />
                  
                  {/* Main Hall */}
                  <rect x="100" y="100" width="800" height="600" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Section Dividers */}
                  <line x1="500" y1="100" x2="500" y2="700" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="100" y1="400" x2="900" y2="400" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Section Labels */}
                  <text x="300" y="250" fontSize="24" fill="#9ca3af" fontWeight="bold" textAnchor="middle">
                    ZONE A
                  </text>
                  <text x="700" y="250" fontSize="24" fill="#9ca3af" fontWeight="bold" textAnchor="middle">
                    ZONE B
                  </text>
                  <text x="300" y="550" fontSize="24" fill="#9ca3af" fontWeight="bold" textAnchor="middle">
                    ZONE C
                  </text>
                  <text x="700" y="550" fontSize="24" fill="#9ca3af" fontWeight="bold" textAnchor="middle">
                    ZONE D
                  </text>
                  
                  {/* Entrance */}
                  <rect x="450" y="695" width="100" height="10" fill="#10b981" />
                  <text x="500" y="735" fontSize="16" fill="#10b981" fontWeight="bold" textAnchor="middle">
                    ENTRÉE
                  </text>
                  
                  {/* Exhibitor Pins */}
                  {exhibitors.map((exhibitor) => {
                    const x = 100 + (exhibitor.coordinates.x / 100) * 800;
                    const y = 100 + (exhibitor.coordinates.y / 100) * 600;
                    const isSelected = selectedExhibitor?.id === exhibitor.id;
                    const isHovered = hoveredStand === exhibitor.id;
                    const color = getCategoryColor(exhibitor.category);
                    
                    return (
                      <g
                        key={exhibitor.id}
                        onMouseEnter={() => setHoveredStand(exhibitor.id)}
                        onMouseLeave={() => setHoveredStand(null)}
                        onClick={() => onExhibitorClick(exhibitor)}
                        style={{ cursor: 'pointer' }}
                        className="transition-all"
                      >
                        {/* Pin Shadow */}
                        {(isSelected || isHovered) && (
                          <circle
                            cx={x}
                            cy={y}
                            r="25"
                            fill={color}
                            opacity="0.2"
                          />
                        )}
                        
                        {/* Pin */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected || isHovered ? "15" : "10"}
                          fill={color}
                          stroke="white"
                          strokeWidth="2"
                          className="transition-all"
                        />
                        
                        {/* Stand Number */}
                        <text
                          x={x}
                          y={y + 4}
                          fontSize={isSelected || isHovered ? "10" : "8"}
                          fill="white"
                          fontWeight="bold"
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          {exhibitor.standNumber}
                        </text>
                        
                        {/* Tooltip on hover */}
                        {isHovered && (
                          <g>
                            <rect
                              x={x - 60}
                              y={y - 50}
                              width="120"
                              height="30"
                              fill="white"
                              stroke={color}
                              strokeWidth="2"
                              rx="5"
                            />
                            <text
                              x={x}
                              y={y - 30}
                              fontSize="12"
                              fill="#111827"
                              fontWeight="bold"
                              textAnchor="middle"
                            >
                              {exhibitor.name}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* Selected Exhibitor Info Card */}
      {selectedExhibitor && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white rounded-lg shadow-xl p-4 max-w-sm w-full mx-4">
          <div className="flex items-start gap-3">
            <img
              src={selectedExhibitor.logo}
              alt={selectedExhibitor.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{selectedExhibitor.name}</h3>
              <p className="text-sm text-gray-600">Stand {selectedExhibitor.standNumber}</p>
            </div>
            <button
              onClick={() => onExhibitorClick(selectedExhibitor)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 z-10 bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
        💡 Glissez pour naviguer • Pincez pour zoomer
      </div>
    </div>
  );
};

export default ExhibitorMap;