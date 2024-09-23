export type Player = "Red" | "Yellow" | null;

export interface CellProps {
  value: Player;
  onClick: () => void;
}

export interface GameBoardState {
  grid: Player[][];
  currentPlayer: Player;
  isGameOver: boolean;
}
