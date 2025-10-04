@extends('layouts.app')
@section('content')
<div class="container">
    <h2 class="text-center my-4">Featured Furniture</h2>
    <div class="row">
        @foreach($products as $product)
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="{{ asset('storage/' . $product->image) }}" class="card-img-top" alt="{{ $product->name }}">
                <div class="card-body">
                    <h5 class="card-title">{{ $product->name }}</h5>
                    <p class="card-text">Rs {{ $product->price }}</p>
                    <button class="btn btn-primary add-to-cart" data-id="{{ $product->id }}">Add to Cart</button>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection