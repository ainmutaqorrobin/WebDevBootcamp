const computer = {
  CPU: "Intel Core i7",
  RAM: "16",
  GPU: "RTX 4070ti",
  Storage: "512",
};

interface Computer {
  CPU: string;
  RAM: number;
  GPU: string;
  Storage: number;
}

type ComputerProps = keyof typeof computer;

type ComputerProps2 = keyof Computer;
