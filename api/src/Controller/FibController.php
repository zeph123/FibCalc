<?php

declare(strict_types=1);

namespace App\Controller;

use JsonException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FibController
 */
class FibController extends AbstractController
{

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws JsonException
     */
    #[Route('/calcFib', name: 'calcFib', methods: ['POST', 'OPTIONS'])]
    public function calcFib(Request $request): JsonResponse | Response
    {
        if ($request->getMethod() === 'OPTIONS') {
            return new Response('OK', Response::HTTP_OK);
        }

        // Getting params from request.
        $parameters = json_decode($request->getContent(), false, 512, JSON_THROW_ON_ERROR);

        $index = $parameters->index;

//        // Calculation Fibonnaci number using recursive method.
//        $calcFibResult = $this->calcFibRecursive($index);

        // Calculation Fibonnaci number using Behold Binet’s formula.
        $calcFibResult = $this->calcFibBinet($index);

        return new JsonResponse([
            'code' => 200,
            'message' => 'OK',
            'index' => $index,
            'calcFibResult' => $calcFibResult,
            'additionalInformation' => ["FibCalc", "Zygmunt Łata", "I2S 2.3"]
        ]);
    }

    /**
     * @param int $index
     * @return int
     */
    private function calcFibRecursive(int $index): int
    {
        if ($index < 2) {
            return $index;
        }

        return $this->calcFibRecursive($index - 1) + $this->calcFibRecursive($index - 2);
    }

    /**
     * @param int $index
     * @return int
     */
    private function calcFibBinet(int $index): int
    {
        if ($index < 2) {
            return $index;
        }

        $phi = (1 + sqrt(5)) / 2;
        return (int) round(($phi ** $index) / sqrt(5));
    }
}