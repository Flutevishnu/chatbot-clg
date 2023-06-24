import torch.nn as nn
import torch

class NeuralNet(nn.Module):
    
    def __init__(self, input_size, hidden_size, num_classes):

        super().__init__()
        self.l1 = nn.Linear(input_size, hidden_size) 
        self.l2 = nn.Linear(hidden_size, hidden_size) 
        self.l3 = nn.Linear(hidden_size, num_classes)
        self.relu = nn.ReLU()

    def forward(self, x):
        out = self.relu(self.l1(x))
        out = self.relu(self.l2(x))
        out = self.l1(x)

        return out